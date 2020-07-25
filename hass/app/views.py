from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth import *
#from . form import *
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from datetime import date,datetime
from . models import *
User=get_user_model()
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from paytm import checksum


# Create your views here.

def demo(request):
    return render(request,'demo.html')
def plan_towing(request):
    return render(request,'plan_towing.html')
def payment(request):
    obj=insurance.objects.get(mobile=request.user.mobile)
    price=obj.price
    id=obj.id
    param_dict = {
 
                'MID': 'eWjdCL27833052730632', 
                'ORDER_ID': str(id), 
                'TXN_AMOUNT': str(price),
                'CUST_ID': str(request.user.id),
                'INDUSTRY_TYPE_ID': 'Retail',
                'WEBSITE': 'WEBSTAGING',#for testing
                'CHANNEL_ID': 'WEB',
                'CALLBACK_URL':'http://127.0.0.1:8000/handlerequest/',
 
        }
    param_dict['CHECKSUMHASH'] = checksum.generate_checksum(param_dict, 'ss1#WcQWhmyD_FYM')
    
    return render(request,'payment.html',{'param_dict':param_dict})
 
            
            
 
@csrf_exempt
def handlerequest(request): #paytm will send POST request herre
    # paytm will send you post request here
    form = request.POST
    response_dict = {}
    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            Checksum = form[i]
 
    verify = checksum.verify_checksum(response_dict, 'ss1#WcQWhmyD_FYM', Checksum)
    if verify:
        if response_dict['RESPCODE'] == '01':
            print('order successful')
        else:
            print('order was not successful because' + response_dict['RESPMSG'])
    return render(request, 'payment1.html', {'response': response_dict})

def Towingpayment(request):
    obj = towing_plan_detail.objects.latest('id')
    price=obj.price
    id=obj.id
    param_dict = {
                'MID': 'eWjdCL27833052730632', 
                'ORDER_ID': str(id), 
                'TXN_AMOUNT': str(price),
                'CUST_ID': str(request.user.id),
                'INDUSTRY_TYPE_ID': 'Retail',
                'WEBSITE': 'WEBSTAGING',#for testing
                'CHANNEL_ID': 'WEB',
                'CALLBACK_URL':'http://127.0.0.1:8000/Towinghandlerequest/',
 
        }
    param_dict['CHECKSUMHASH'] = checksum.generate_checksum(param_dict, 'ss1#WcQWhmyD_FYM')
    
    return render(request,'payment.html',{'param_dict':param_dict})
 
            
            
 
@csrf_exempt
def Towinghandlerequest(request): #paytm will send POST request herre
    # paytm will send you post request here
    form = request.POST
    response_dict = {}
    
    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            Checksum = form[i]
 
    verify = checksum.verify_checksum(response_dict, 'ss1#WcQWhmyD_FYM', Checksum)
    if verify:
        if response_dict['RESPCODE'] == '01':
            print('order successful')
        else:
            print('order was not successful because' + response_dict['RESPMSG'])
    template_str='payment_mail.html'
    html_message=render_to_string(template_str, {'res':response_dict['RESPMSG']})
    plain_message=strip_tags(html_message)
    email_from='himaybharoliya50366@gmail.com'
    subject='payment'
    to='sagargajjar1999@gmail.com'
    send_mail(subject,plain_message,email_from,[to],html_message=html_message,fail_silently=True)        
    return render(request, 'payment1.html', {'response': response_dict})

def Rentalpayment(request):
    obj = rental_detail.objects.latest('id')
    price=obj.price
    id=obj.id
   
    param_dict = {
 
                'MID': 'eWjdCL27833052730632', 
                'ORDER_ID': str(id), 
                'TXN_AMOUNT': str(price),
                'CUST_ID': str(request.user.id),
                'INDUSTRY_TYPE_ID': 'Retail',
                'WEBSITE': 'WEBSTAGING',#for testing
                'CHANNEL_ID': 'WEB',
                'CALLBACK_URL':'http://127.0.0.1:8000/Rentalhandlerequest/',
 
        }
    param_dict['CHECKSUMHASH'] = checksum.generate_checksum(param_dict, 'ss1#WcQWhmyD_FYM')
    
    return render(request,'payment.html',{'param_dict':param_dict})
 
            
            
 
@csrf_exempt
def Rentalhandlerequest(request): #paytm will send POST request herre
    # paytm will send you post request here
    form = request.POST
    response_dict = {}
    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            Checksum = form[i]
 
    verify = checksum.verify_checksum(response_dict, 'ss1#WcQWhmyD_FYM', Checksum)
    if verify:
        if response_dict['RESPCODE'] == '01':
            print('order successful')
        else:
            print('order was not successful because' + response_dict['RESPMSG'])
    return render(request, 'payment1.html', {'response': response_dict})

def index_page(request):
    messages.info(request,'welcom to our website')
    return render(request,'index.html')
def master_page(request):
    return render(request,'maste.html')

def register_page(request):
    state_s=cites.objects.all().values('city_state').distinct()
    print(state_s)            
    if request.method=="POST":
        first=request.POST.get('fname')
        mname=request.POST.get('mname')
        lname=request.POST.get('lname')
        email=request.POST.get('email')
        mobile=request.POST.get('mobile')
        dob=request.POST.get('dob')
        gender=request.POST.get('gen')
        address=request.POST.get('address')
        password=request.POST.get('pass')
        cat=request.POST.get('choice')
        states=request.POST.get('states')
        city=request.POST.get('city')
        try:
            User.objects.get(email=email)
            return render(request,'register1.html',{'states':state_s})
           
        except:
            User.objects.create_user(first_name=first,mid_name=mname,last_name=lname,email=email,username=email,password=password,gender=gender,mobile=mobile,dob=dob,address=address,state=states,city=city)     
            template_str='WelcomeMail.html'
            html_message=render_to_string(template_str,{'name':first})
            plain_message=strip_tags(html_message)
            email_from=settings.EMAIL_HOST_USER
            subject='Wel Come'
            to=email
            send_mail(subject,plain_message,email_from,[to],html_message=html_message,fail_silently=True)
        return redirect(login_page)
    else:
        return render(request,'register1.html',{'states':state_s})
def login_page(request):
    if request.method=='POST':
        email=request.POST.get('username')
        password=request.POST.get('password')
        cat=request.POST.get('choise')
        u=authenticate(username=email,password=password)
        if u is not None:
            login(request,u)
            if cat=='rental':
                return redirect(homepage)
            elif cat=='towing':
                return redirect(index_towing_page)
            elif cat=='insurance':
                return redirect(insurance_page)
            else:
                messages.error(request,'PLEASE SELECT ONE SERVICE')
                return redirect(login_page)
                
        else:
            messages.error(request,'Invalid User name or Password')
            return redirect(login_page)
    else:
        return render(request,'login.html') 
 

      
def rantal_page(request):
    return render(request,'rantal.html')
def towing_page(request):
    return render(request,'towing.html')
@csrf_exempt
def insurance_page(request):
    return render(request,'head.html')
def policy(request):
    return render(request,'policy.html')
def log_out(request):
    logout(request)
    return redirect(login_page)

def mail(request):
    return render(request,'WelcomeMail.html')
#def payment(request):
    #return render(request,'payment.html')
def confirm_detail_insurance(request,rto,series,stat,number,make,model,year,engine,chassis,seat,fuel,city,cc):
    obj=car.objects.get(make=make,model=model)
    p=int(obj.price)
    price=(p*10)//100
    if request.method=='POST':
        insurance.objects.create(mobile=request.user.mobile,email=request.user.email,veh_state=stat,veh_code=rto,veh_ser=series,veh_no=number,carmodel=model,m_name=make,year=year,engine=engine,chassis=chassis,seat=seat,fuel=fuel,city=city,cc=cc,price=price)
        obj=insurance.objects.get(mobile=request.user.mobile)
        template_str='policy.html'
        html_message=render_to_string(template_str,{'fname':request.user.first_name,'mname':request.user.mid_name,'lname':request.user.last_name,'address':request.user.address,'ucity':request.user.city,'ustate':request.user.state,'mobile':request.user.mobile,'email':request.user.email,'id':obj.id,'stat':stat,'rto':rto,'series':series,'number':number,'make':make,'model':model,'year':year,'engine':engine,'chassis':chassis,'seat':seat,'fuel':fuel,'city':city,'cc':cc,'date':obj.date,'ex_date':obj.ex_date,'price':price})
        plain_message=strip_tags(html_message)
        email_from=settings.EMAIL_HOST_USER
        subject='POLICY DETAIL'
        to=request.user.email
        send_mail(subject,plain_message,email_from,[to],html_message=html_message,fail_silently=True)
        return redirect(payment)
    else:
        date=datetime.now()
        ex=datetime.now()+timedelta(days=365)
        return render(request,'confirm_detail_insurance.html',{'price':price,'stat':stat,'rto':rto,'series':series,'number':number,'make':make,'model':model,'year':year,'engine':engine,'chassis':chassis,'seat':seat,'fuel':fuel,'city':city,'cc':cc,'date':date,'ex':ex})
def select_plan_page(request):
    s_tates=rto_code.objects.all().values('state').distinct()
    print(s_tates)
    makes=car.objects.all().values('make').distinct()
    if request.method=='POST':
        stat=request.POST.get('states')
        rto=request.POST.get('r_t_o')
        series=request.POST.get('series')
        number=request.POST.get('number')
        make=request.POST.get('make')
        model=request.POST.get('model')
        year=request.POST.get('year')
        engine=request.POST.get('engine')
        chassis=request.POST.get('chassis')
        seat=request.POST.get('seat')
        fuel=request.POST.get('fuel')
        date=datetime.now()
        city=request.POST.get('place')
        cc=request.POST.get('cc')
        #insurance.objects.create(mobile=mobile,email=email,veh_state=stat,veh_code=rto,veh_ser=series,veh_no=number)
        print(number)
        return redirect('confirm_detail_insurance',rto,series,stat,number,make,model,year,engine,chassis,seat,fuel,city,cc)
        #return render(request,'confirm_detail_insurance.html',{'stat':stat,'rto':rto,'series':series,'number':number,'make':make,'model':model,'year':year})
    else:
        if request.user.is_authenticated:
            try:
                obj=insurance.objects.get(mobile=request.user.mobile)
                id=obj.id
                number=obj.veh_no
                rto=obj.veh_code
                series=obj.veh_ser
                model=obj.carmodel
                make=obj.m_name 
                year=obj.year 
                engine=obj.engine
                chassis=obj.chassis 
                seat=obj.seat 
                fuel=obj.fuel 
                stat=obj.veh_state
                city=obj.city
                date=obj.date
                ex_date=obj.ex_date 
                cc=obj.cc   
                return render(request,'policy_detail.html',{'stat':stat,
                'rto':rto,
                'series':series,
                'number':number,
                'make':make,
                'model':model,
                'year':year,
                'engine':engine,
                'chassis':chassis,
                'seat':seat,
                'fuel':fuel,
                'city':city,
                'date':date,
                'ex_date':ex_date,
                'cc':cc,
                })
            except:
                return render(request,'select_plan.html',{'states':s_tates,'make':makes})
        else:
            return redirect(login_page)
        
def renew_page(request):
    s_tates=rto_code.objects.all().values('state').distinct()
    print(s_tates)
    makes=car.objects.all().values('make').distinct()
    if request.method=='POST':
        renew=request.POST.get('renew')
        return redirect(payment)
    else:
        if request.user.is_authenticated:
            b=datetime.today() 
            try:
                obj=insurance.objects.get(mobile=request.user.mobile,ex_date__gte=b) #> gte lt lte
                return render(request,'head.html',{'msg':'Your Policy is not yet expire...Renew After exp'})
            except:
                try:
                    obj=insurance.objects.get(mobile=request.user.mobile)
                    rto=obj.veh_code
                    series=obj.veh_ser
                    number=obj.veh_no
                    id=obj.id
                    return render(request,'renewpolicy.html',{'rto':rto,'series':series,'number':number,'id':id})
                except:
                
                    return redirect('select_plan')
        else:
            return redirect(login_page)
        
#def insurance_master_page(request):
    #return render(request,'insurance_master.html')
def carclaim_page(request):
    if request.user.is_authenticated:
        if request.method=="POST":
            pno=request.POST.get('policy_no')
            try:
                obj=insurance.objects.get(id=pno)
                id=obj.id
                number=obj.veh_no
                rto=obj.veh_code
                series=obj.veh_ser
                stat=obj.veh_state
                model=obj.carmodel
                vcity=obj.city
                vdate=obj.date
                make=obj.m_name
                price=obj.price
                engine=obj.engine
                chassis=obj.chassis
                fuel=obj.fuel
                seat=obj.seat
                cc=obj.cc
                #year=obj.year    
                return redirect('claim_form_page',rto,series,stat,number,make,model,id,engine,chassis,seat,fuel,cc)
            except:
                msg='ENTER VALID POLICY NUMBER....!'
                return render(request,'car_claim.html',{'message':msg})
        else:
            return render(request,'car_claim.html')
    else:
        return redirect(login_page)
def contect_page(request):
    return render(request,'contect.html')
def garage_list_page(request):
    states=cites.objects.all().values('city_state').distinct()
    print(states)
    return render(request,'garage_list.html',{'states':states})

def get_city(request):
    selected_state=request.GET.get('state')
    city=cites.objects.filter(city_state=selected_state).values('city_name')
    print(city)
    return JsonResponse(list(city),safe=False)


def get_manufacture(request):
    selected_city=request.GET.get('city')
    selected_state=request.GET.get('state')
    city=cites.objects.get(city_name=selected_city,city_state=selected_state)
    garage=Garage.objects.filter(location=city).values('dealer_name','address','city','state','contect_no','contect_person','type_of_vehical','manufacture')
    return JsonResponse(list(garage),safe=False)

    #manufacture=cites.objects.filter

def customer_support_page(request):
    return render(request,'customer_support.html')
def grievance_page(request):
    return render(request,'grievance.html')
def policy_otp_page(request):
    if request.method=='POST':
        otp=request.POST.get('otp')
        return render(request,'otp_page.html')
    else:

        return render(request,'otp_page.html')
def policy_no_page(request):
    return render(request,'policyno_page.html')
def head_page(request):
    return render(request,'head.html')
def plan_detail_insurance_page(request):
    return render(request,'plan_detail_insurance.html')

def paln_detail_page(request):
    return render(request,'plan_detail.html')
def expert_blog_page(request):
    return render(request,'expert_blog.html')
def insurance_information_page(request):
    return render(request,'insurance_info.html')
def car_insurance_information_page(request):
    return render(request,'car_insurance_info.html')
def car_act_page(request):
    return render(request,'car_act.html')
def parking_tips_page(request):
    return render(request,'parking_tips.html')
def microdot_page(request):
    return render(request,'microdot.html')
def thired_party_detail_page(request):
    return render(request,'thired_party_detail.html')
def new_rules_page(request):
    return render(request,'new_rules.html')
def tuch_less_page(request):
    return render(request,'tuchless.html')
def branch_page(request):
    states=cites.objects.all().values('city_state').distinct()
    print(states)
    return render(request,'branches.html',{'states':states})
def get_branches(request):
    selected_city=request.GET.get('city')
    selected_state=request.GET.get('state')
    city=cites.objects.get(city_name=selected_city,city_state=selected_state)
    branch1=branch.objects.filter(location=city).values('branch_name','address','city','state','contect_no')
    return JsonResponse(list(branch1),safe=False)
def detail_page(request):
    return render(request,'detail.html')




def get_make(request):
    make=request.GET.get('make')
    car_list=list(car.objects.filter(make__icontains=make).values('make','model','id'))
    return JsonResponse(car_list,safe=False)
def get_state_city(request):
    state=request.GET.get('state')
    state_list=list(cites.objects.filter(make__icontains=state).values('city_name','city_state','id'))
    print(state_list)
    return JsonResponse(state_list,safe=False)

def privacy_policy_page(request):
    return render(request,'privacy_policy.html')
def insurance_app_policy_page(request):
    return render(request,'insurance_app_policy.html')
def terms_condition_page(request):
    return render(request,'terms_condition.html')
def disclamer_page(request):
    return render(request,'disclamer.html')

def claim_form_page(request,rto,series,stat,number,make,model,id,engine,chassis,seat,fuel,cc):
    if request.method=='POST':
        
        mobile=request.POST.get('mobile')
        policy_no=request.POST.get('policy_no')
        number=request.POST.get('vno')
        model=request.POST.get('model')
        engine=request.POST.get('engine')
        chassis=request.POST.get('chassis')
        seat=request.POST.get('seat')
        fuel=request.POST.get('fuel')
        cc=request.POST.get('cc')
        usage=request.POST.get('usage')
        reason=request.POST.get('reason')
        proof=request.FILES.get('proof')
        claim.objects.create(policy_no=policy_no,mobile=request.user.mobile,email=request.user.email,veh_no=number,m_name=model,engine=engine,chassis=chassis,seat=seat,fuel=fuel,cc=cc,usage=usage,reason=reason,proof=proof)
        claim_msg="Your Request For Claim Is Successfully Submitted....! Our Officer Will Take A Visit To You For Verification Soon..!"
        return render(request,'head.html',{'claim_msg':claim_msg})
    else:
        return render(request,'claim_form.html',{'stat':stat,'rto':rto,'series':series,'number':number,'make':make,'model':model,'id':id,'engine':engine,'chassis':chassis,'seat':seat,'fuel':fuel,'cc':cc})
def feedback_page(request):
    if request.method=='POST':
        title=request.POST.get('title')
        name=request.POST.get('name')
        mno=request.POST.get('mno')
        e_mail=request.POST.get('email')
        user=request.POST.get('user')
        purpose=request.POST.get('purpose')
        product=request.POST.get('product')
        feedback=request.POST.get('feedback')
        template_str='feedback_mail.html'
        html_message=render_to_string(template_str,{'title':title,'name':name,'mno':mno,'email':e_mail,'user':user,'purpose':purpose,'product':product,'feedback':feedback})
        plain_message=strip_tags(html_message)
        email_from=e_mail
        subject='FEED BACK'
        to='sagargajjar1999@gmail.com'
        send_mail(subject,plain_message,email_from,[to],html_message=html_message,fail_silently=True)
        return redirect(log_out)
    else:
        return render(request,'feedback.html')
#towing


# Create your views here.
def index_towing_page(request):
    return render(request,'towinghome.html')

def ac_towing(request):
    return render(request,'accidenttowing.html')

def bat_jump(request):
    return render(request,'batteryjump.html')

def flat_tyre(request):
    return render(request,'flattyre.html')

def lost_key(request):
    return render(request,'lostkey.html')

def fuel_pro(request):
    return render(request,'fuelpro.html')

def twowheel(request):
    return render(request,'2wheelplan.html')

def fourwheel(request):
    return render(request,'4wheelplan.html')
def faq(request):
    return render(request,'faq.html')

def contact(request):
    return render(request,'contact.html')

def about(request):
    return render(request,'about.html')

def covrage(request):
    return render(request,'covrage.html')

def plans(request):
    return render(request,'plan_detail.html')

def bat_plans(request):
    return render(request,'bat_jump_plan.html')

def flat_plans(request):
    return render(request,'flattyre_plan.html')

def lost_plans(request):
    return render(request,'lostkey_plan.html')

def fuel_plans(request):
    return render(request,'fuelpro_plan.html')


def towing_plan(request,cat,price):
    s_tates=rto_code.objects.all().values('state').distinct()
    print(s_tates)
    makes=car.objects.all().values('make').distinct()
    if request.method=='POST':
        stat=request.POST.get('states')
        city=request.POST.get('place')
        rto=request.POST.get('r_t_o')
        series=request.POST.get('series')
        num=request.POST.get('number')
        mon=request.POST.get('month')
        year=request.POST.get('year')
        make=request.POST.get('make')
        model=request.POST.get('model')
        c=cat
        p=price
        try:
            obj=request.POST.get(veh_code=rtom)
            obj=request.POST.get(veh_ser=series)
            obj=request.POST.get(veh_no=num)
            return redirect(towing_plan)
        except:
            if User.is_active:
                emails = User.objects.get(email=request.user.email)
            towing_plan_detail.objects.create(email=emails,category=c,price=p,state=stat,rto=rto,series=series,number=num,make=make,model=model,city=city,month=mon,year=year)
            return redirect(Towingpayment)
    else:
        #s_tates=rto_code.objects.all().values('state').distinct()
        # print(s_tates)
        c=cat
        p=price
        makes=car.objects.all().values('make').distinct()
        print(makes)
        return render(request,'towing_plan.html',{'cat':c,'price':p,'states':s_tates,'make':makes})
def get_make_model(request):
    selected_make=request.GET.get('make')
    model=car.objects.filter(make=selected_make).values('model')
    print(model)
    return JsonResponse(list(model),safe=False)

def profile_tow(request,id):
    states=cites.objects.all().values('city_state').distinct()
    print(states)
    if request.method=='POST':
        obj=User.objects.get(id=id)
        fname=request.POST.get('first_name')
        mname=request.POST.get('mid_name')
        lname=request.POST.get('last_name')
        add=request.POST.get('address')
        city=request.POST.get('city')
        state=request.POST.get('states')
        obj.first_name=fname
        obj.mid_name=mname
        obj.last_name=lname
        obj.address=add
        obj.city=city
        obj.state=state
        obj.save()
        return render(request,'towinghome.html')
    else:
        return render(request,'profile.html',{'states':states})

def profile_ins(request,id):
    states=cites.objects.all().values('city_state').distinct()
    print(states)
    if request.method=='POST':
        obj=User.objects.get(id=id)
        fname=request.POST.get('first_name')
        mname=request.POST.get('mid_name')
        lname=request.POST.get('last_name')
        add=request.POST.get('address')
        city=request.POST.get('city')
        state=request.POST.get('states')
        obj.first_name=fname
        obj.mid_name=mname
        obj.last_name=lname
        obj.address=add
        obj.city=city
        obj.state=state
        obj.save()
        return render(request,'head.html')
    else:
        return render(request,'profile.html',{'states':states})

def email_valid(request):
    email=request.GET.get('email')
    try:
        User.objects.get(email=email)
        return JsonResponse('Email Taken',safe=False)
    except:
        return JsonResponse('true',safe=False)
def mobile_valid(request):
    mobile=request.GET.get('mobile')
    try:
        User.objects.get(mobile=mobile)
        return JsonResponse('Mobile Number Taken',safe=False)
    except:
        return JsonResponse('true',safe=False)
def email_match(request):
    email=request.GET.get('email')
    
    try:
        User.objects.get(email=email)
        return JsonResponse(safe=False)
    except:
        return JsonResponse('email not match',safe=False)    
def car_insurance(request):
    s_tates=rto_code.objects.all().values('state').distinct()

    return render(request,'car_insurance.html',{'states':s_tates})
#towing
def get_place(request):
    selected_state=request.GET.get('state')
    place=rto_code.objects.filter(state=selected_state).values('place')
    print(place)
    return JsonResponse(list(place),safe=False)


def formfillup(request):
    if request.method=='POST':
        vehicalnumber=request.POST.get('vehicalnumber')
        location=request.POST.get('location')
        gender=request.POST.get('gender')
        orderplace.objects.create(vehicalnumber=vehicalnumber,location=location,gender=gender)
        return render(request,'towinghome.html')
    return render(request,'formfillup.html')    

def get_rto_code(request):
    selected_place=request.GET.get('place')
    print(selected_place)
    rto=rto_code.objects.filter(place=selected_place).values('reg_no')
    print(rto)
    return JsonResponse(list(rto),safe=False)
def download(request):
    return render(request,'download.html')
def turms_condition_towing_page(request):
    return render(request,'turms_condition.html')

 #rental part

def rental_master_page(request):
    return render(request,"rantal_master.html")
def rental_home_page(request):
    state_s=cites.objects.all().values('city_state').distinct()
    print(state_s) 
    return render(request,'rental_home.html',{'states':state_s})
def vehical_detail(request):
    if request.method=='POST':
        r_t_o=request.POST.get('r_t_o')
        register=request.POST.get('register')
        month=request.POST.get('month')
        year=request.POST.get('year')
        make=request.POST.get('make')
        model=request.POST.get('model')
        category=request.POST.get('category')
        vehical.objects.create(vehical_number=r_t_o+register,vehical_purchase_date=month+year,make=make,model=model,category=category)
        #print(r_t_o)
        return redirect(index_page)
    else:
        return redirect(towing_plan)    

def homepage(request):
    return render(request,'homepage.html')
def rental_city(request):
    if request.method=='POST':
        pick_up_city_name=request.POST.get('pick_up_city_name')
        drop_up_city_name=request.POST.get('drop_up_city_name')
        pick_up_date_time=request.POST.get('pick_up_date_time')
        drop_up_date_time=request.POST.get('drop_up_date_time')
        car=request.POST.get('car')
        #data=document.objects.filter(make=car)
        rantal_search.objects.create(pick_up_city_name=pick_up_city_name,drop_up_city_name=drop_up_city_name,pick_up_date_time=pick_up_date_time,drop_up_date_time=drop_up_date_time,make=car)
        data=document.objects.filter(make=car)        
        data1=document1.objects.filter(time_duration=drop_up_date_time)
        return render(request,'search.html',{'data':data,'data1':data1})
    else:
        city=cites.objects.all().values('city_name').distinct()
        return render(request,'r_home.html',{'states':city})


def car_display(request):
    car=car_display_with_fuel.objects.all()
    return render(request,'display.html',{'car':car})

def confirmorder(request,id,id1):
    j=document.objects.get(id=id)
    k=document1.objects.get(id=id1)
    obj = rantal_search.objects.latest('id')
    rental_detail.objects.create(email=request.user.email,price=k.price)
    #cc=rantal_search.objects.get()
    #cc=rantal_search.objects.filter()    
    return render(request,'confirmorder.html',{'j':j,'k':k,'obj':obj})


def display(request):
    if request.method=='POST':
        pass
    else:
        if User.is_active:
            emails = User.objects.get(email=request.user.email)
            abh=towing_plan_detail.objects.filter(email=emails) 
            return render(request,'towingplandisplay.html',{'abh':abh})

def upload(request):
    if request.method=='POST':
        make=request.POST.get('make')
        model=request.POST.get('model')
        p=request.FILES['image']
        from . models import User
        #user=document(pic = p)
        #user.save()``
        document.objects.create(make=make,model=model,pic=p)
        return render(request,'upload.html')
    else:
        return render(request,'upload.html')


def mybooking(request):
    if User.is_active:
            emails = User.objects.get(email=request.user.email)
    aa=ad.objects.filter(email=emails)
    #bb=ad.object.get()
    print(aa)

    return render(request,'mybooking.html',{'aa':aa})

def cancel(request,id):
    ad.objects.get(id=id).delete()
    return redirect(mybooking)
    
def bb(request):
    dd=document.objects.get()
    dd=document.objects.filter()
def prac(request,id,id1):
    if request.method=='POST':
        pass
    else:
        if User.is_active:
            emails = User.objects.get(email=request.user.email)
        print(emails)    
        abhi=document.objects.get(id=id)
        abhi1=document1.objects.get(id=id1)
        #ad.objects.email_from()
        ad.objects.create(email=emails,make=abhi.make,model=abhi.model,picture=abhi.pic,time_duration=abhi1.time_duration,price=abhi1.price,km_price=abhi1.km_price)
        return render(request,'prac.html',{'abhi':abhi,'abhi1':abhi1})


def master1(request):
    return render(request,'master1.html')    

def offer(request):
    return render(request,'offer.html')

def tries(request):
    return render(request,'try.html')

def eli(request):
    return render(request,'eligibility.html')

def member(request):
    return render(request,'member.html')
def rto(request):
    return render(request,'rto.html')

def helpcenter(request):
    return render(request,'helpcenter.html')
    
def profile(request,id,id2):
    m=document.objects.get(id=id)
    n=document1.objects.get(id=id2)
    
    return render(request,'profile.html',{'m':m,'n':n})

def booking(request):
    m=ad.objects.filter(id=1)
    return render(request,'booking.html',{'m':m})

def driverupload(request,id,id1):
    if request.method=='POST':
        p=request.FILES['file']
        p1=request.FILES['myfile']
        from . models import User
        #user=document(pic = p)
        #user.save()
        driverupdate.objects.create(picture=p,picture1=p1)
        j=document.objects.get(id=id)
        k=document1.objects.get(id=id1)
        obj = rantal_search.objects.latest('id')
        return render(request,'confirmorder.html',{'j':j,'k':k,'obj':obj})
    else:
        return render(request,'driverupdate.html')
        
        
def faq_insurance_page(request):
    return render(request,'faq_insurance.html')
def overview_page(request):
    return render(request,'overview.html')
def who_we_page(request):
    return render(request,'who_we.html')
def promoter_page(request):
    return render(request,'promoter.html')

def log(request):
    logout(request)
    return render(request,'homepage.html')

def info_center_page(request):
    return render(request,'info_center.html')
'''def login_page(request):
    if request.method=='POST':
        email=request.POST.get('email')
        password=request.POST.get('pass')
        u=authenticate(username=email,password=password)
        if u:
            login(request,u)
            if request.user.is_employee==True:
                return redirect(emp_page)
            elif request.user.is_coustomer==True:
                return redirect(cust_page)
            else:
                return redirect(base_page)   
        else:
            messages.error(request,'invalid email or password')
            return redirect(login_page)
    else:
        return render(request,'login.html')  


def home(request):
    return render(request,'home.html')
def emp_page(request):
    return render(request,'emp.html')
def cust_page(request):
    return render(request,'company.html')
@login_required(login_url='/login/')
def file_page(request):
    if request.method=='POST':
        form=documentform(request.POST,request.FILES)
        if form.is_valid():
            form=form.save(commit=False)
            form.uploaded_by=request.user
            form.save()
            return redirect(home)
    else:
        form=documentform()
        return render(request,'file.html',{'form':form})
def mail_page(request):
    template_str='mail.html'
    html_message=render_to_string(template_str,{'name':'lucky'})
    plain_message=strip_tags(html_message)
    email_from=settings.EMAIL_HOST_USER
    subject='thank you'
    to='sohilgadhiya3546@gmail.com'
    send_mail(subject,plain_message,email_from,[to],html_message=html_message)
    return redirect(mail_page)
    #return render(request,'mail.html')
def my_image(request):
    qset=document.objects.filter(uploaded_by=request.user)
    return render(request,'display.html',{'images':qset})
def change_pass(request):
    if request.method=='POST':
        form=PasswordChangeForm(request.user,request.POST)
        if form.is_valid():
            user=form.save()
            update_session_auth_hash(request,user)
            messages.success(request,'your password was succesfully change')
            return redirect(login_page)
        else:
            messages.error(request,'please collect the error')
    else:
        form=PasswordChangeForm(request.user)
    return render(request,'change.html',{'form':form})'''