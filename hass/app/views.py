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

User=get_user_model()


# Create your views here.
def index_page(request):
    messages.info(request,'welcom to our website')
    return render(request,'index.html')
def master_page(request):
    return render(request,'maste.html')
def register_page(request):
    if request.method=="POST":
        first=request.POST.get('fname')
        lname=request.POST.get('lname')
        email=request.POST.get('email')
        mobile=request.POST.get('mobile')
        dob=request.POST.get('dob')
        gender=request.POST.get('gen')
        address=request.POST.get('address')
        password=request.POST.get('pass')
        cat=request.POST.get('choice')
        try:
            User.objects.get(email=email)
            return render(request,'register1.html')
           
        except:
            User.objects.create_user(first_name=first,last_name=lname,email=email,username=email,password=password,gender=gender,mobile=mobile,dob=dob,address=address)     
            template_str='WelcomeMail.html'
            html_message=render_to_string(template_str,{'name':first})
            plain_message=strip_tags(html_message)
            email_from=settings.EMAIL_HOST_USER
            subject='Wel Come'
            to=email
            send_mail(subject,plain_message,email_from,[to],html_message=html_message,fail_silently=True)
        return redirect(index_page)


    else:
        return render(request,'register1.html')
def login_page(request):
    if request.method=='POST':
        email=request.POST.get('username')
        password=request.POST.get('password')
        cat=request.POST.get('choise')
        u=authenticate(username=email,password=password)
        if u is not None:
            login(request,u)
            if cat=='rental':
                return redirect(rantal_page)
            elif cat=='towing':
                return redirect(towing_page)
            elif cat=='insurance':
                return redirect(insurance_page)
            else:
                return redirect(master_page)
        else:
            messages.error(request,'Invalid User name or Password')
        return render(request,'maste.html')
    else:
        return render(request,'login.html') 

      
def rantal_page(request):
    return render(request,'rantal.html')
def towing_page(request):
    return render(request,'towing.html')
def insurance_page(request):
    return render(request,'insurance.html')

def log_out(request):
    logout(request)
    return redirect(login_page)

def mail(request):
    
    return render(request,'WelcomeMail.html')
def reg_page(request):
    return render(request,'Reg1.htm ')

def renew_page(request):
    return render(request,'renewpolicy.html ')
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