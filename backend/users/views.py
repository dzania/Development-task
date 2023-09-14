import requests
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework import status
from users.models import User
from .serializers import UserSerializer

# Create your views here.

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=["get"])
    def fetch_user(self, request, pk=None):
        if 'user_data' not in request.session:
            user_data = fetch_user_data_from_api()
            if user_data:
                serializer = UserSerializer(data=user_data)

                if serializer.is_valid():
                    serializer.save()
                    request.session['user_data'] = serializer.data
                    return Response(serializer.validated_data)
                else:
                    return Response(serializer.errors, status=400)
        else:
            user = User.objects.get(uid=request.session['user_data']['uid'])
            serialized_user = UserSerializer(user).data
            return Response(serialized_user)

    @action(detail=False, methods=["post"])
    def set_displayed_photo(self, request, pk=None):
        uid = request.data.get('uid')

        try:
            user = User.objects.get(uid=uid)
        except User.DoesNotExist:
            return Response({"message": "User not found."}, status=status.HTTP_404_NOT_FOUND)
        user.displayed_picture = True
        user.save()
        return Response({"message": "Displayed photo set to True."}, status=status.HTTP_200_OK)

    @action(detail=False, methods=["get"])
    def report(self, request, pk=None):
        users = User.objects.all()
        users_with_displayed_photo = users.filter(displayed_picture=True).count()
        users_count = users.count()
        displayed_photo_percentage = (users_with_displayed_photo / users_count) * 100
        return Response({"users": users_count,
                         "displayed_photo_percentage": round(displayed_photo_percentage, 2)},
                        status=status.HTTP_200_OK)



def fetch_user_data_from_api():
    # Make a request to the random-data API to fetch user data
    api_url = 'https://random-data-api.com/api/v2/users'
    response = requests.get(api_url)

    if response.status_code == 200:
        user_data = response.json()
        return user_data
