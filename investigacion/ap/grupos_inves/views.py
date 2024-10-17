from rest_framework import generics, mixins
from .models import GrupoInvestigacion
from .serializers import GrupoInvestigacionSerializer

class GrupoInvestigacionList(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = GrupoInvestigacion.objects.all()
    serializer_class = GrupoInvestigacionSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class GrupoInvestigacionDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = GrupoInvestigacion.objects.all()
    serializer_class = GrupoInvestigacionSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
