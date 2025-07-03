from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, ProtectedView, LogoutView, HomeView, UserView, AddProductView, ProductListView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('protected/', ProtectedView.as_view(), name='protected'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('home/', HomeView.as_view(), name='home'),
    path('userlist/', UserView.as_view(), name='userlist'),
    path('addproduct/', AddProductView.as_view(), name='addproduct'),
    path('products/', ProductListView.as_view(), name='products'),
    # path('forgotpass/', ForgotpassView.as_view(), name='forgotpass'),
]
