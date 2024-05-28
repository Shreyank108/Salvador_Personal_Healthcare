from django.shortcuts import render, redirect, HttpResponse
from cryptography.fernet import Fernet
import joblib
from django.contrib.auth import get_user_model, authenticate, logout, login

User = get_user_model()

# Create your views here.
def index(request):
    if 'user' in request.session:
        current_user = request.session['user']
        context = {"current_user": current_user}
        return render(request, 'index.html', context)
    return render(request, 'index.html')

def signIn(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        
        user = authenticate(username=username, password=password)
        if user is None:
            return HttpResponse("User does not exist")
        else:
            login(request, user)
            return redirect("home")

    return render(request, 'index.html')

def signUp(request):
    if request.method == "POST":
        name = request.POST["name"]
        f_name, l_name = name.split(" ")
        username = request.POST["username"]
        phone = request.POST["phone"]
        email = request.POST["email"]
        password = request.POST["password"]
        con_password = request.POST["con_password"]
        gender = request.POST["gender"]
        dob = request.POST["dob"]

        # Checking Constraints
        if User.objects.filter(username=username).count() > 0:
            return HttpResponse("Username already exists")
        elif User.objects.filter(email=email).count() > 0:
            return HttpResponse("Email already exists")
        elif password != con_password:
            return HttpResponse("Passwords do not match")
        else:
            user = User.objects.create_user(first_name=f_name, last_name=l_name, username=username, email=email, password=password)
            user.set_password(password)
            user.save()
            return redirect('home')

    return redirect("home")

def logout(request):
    logout(request)
    return redirect('home')

def cardio(request):
    if request.method == "POST":
        age = request.POST["age"]
        height = request.POST["height"]
        weight = request.POST["weight"]
        gender = request.POST["gender"]
        if gender == "M":
            gender = 2
        else:
            gender = 1
        al_high = request.POST["al_high"]
        al_low = request.POST["al_low"]
        cholestrol = request.POST["cholestrol"]
        glucose = request.POST["glucose"]
        smoke = request.POST["smoke"]
        alcohol = request.POST["alcohol"]
        active = request.POST["active"]

        model = joblib.load("/home/tanishk/Downloads/salvador backend/salvador/static/ml/cardio_model.pkl")
        prediction = model.predict([[age, height, weight, al_high, al_low, cholestrol, glucose, smoke, alcohol, active]])
        if prediction[0] == 1:
            user = request.user
            return HttpResponse(f"{user}, You have symptoms of this disease. Please consult to the doctor.")
        else:
            return HttpResponse("You don't have symptoms of this disease")
    else:
        return redirect('home')