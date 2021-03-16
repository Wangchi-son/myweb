from rest_framework import serializers

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        many = kwargs.pop('many', True)
        super(ArticleSerializer, self).__init__(many=many, *args, **kwargs)

    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'radio', 'multicheck')
