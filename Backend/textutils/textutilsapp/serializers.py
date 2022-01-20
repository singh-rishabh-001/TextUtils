from rest_framework import serializers
from .validators import validate_file_extension


class FileSerializer(serializers.Serializer):
    chatfile = serializers.FileField(max_length=100, validators=[
                                     validate_file_extension])
