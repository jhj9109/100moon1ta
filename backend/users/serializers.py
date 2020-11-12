from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_auth.serializers import LoginSerializer as RestAuthLoginSerializer

# 보내는 값 변경
class UserSerializer(serializers.ModelSerializer):
    record = serializers.SerializerMethodField()
    class Meta:
        model = get_user_model()
        fields = ['id', 'email','username','profile_image', 'comment', 'record']
        read_only_fields = ('email', )
    def get_record(self, obj):
        return 0


class LoginSerializer(RestAuthLoginSerializer):
    username = None

class UserListSerializer(serializers.ModelSerializer):
    emailaddress_set = serializers.SlugRelatedField(read_only=True, many=True, slug_field='verified')
    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'username', 'is_staff', 'is_ban', 'emailaddress_set' ]