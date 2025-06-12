class AssetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows assets to be viewed or edited.
    """
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(assigned_to=self.request.user)

    def perform_update(self, serializer):
        serializer.save(assigned_to=self.request.user)