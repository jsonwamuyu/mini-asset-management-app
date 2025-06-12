from django.db import models

class Asset(models.Model):
    asset_name = models.CharField(max_length=100)
    serial_number = models.CharField(max_length=100, unique=True)
    purchase_date = models.DateTimeField(auto_now_add=True)
    assigned_to = models.ForeignKey('auth.User',on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=[
        ('available', 'Available'),
        ('assigned', 'Assigned'),
        ('maintenance', 'Maintenance'),
        ('retired', 'Retired')
    ], default='available')

    def __str__(self):
        return self.asset_name
    

    class Meta:
        ordering = ['asset_name']
        verbose_name = 'Asset'
        verbose_name_plural = 'Assets'


class Assignment(models.Model):
    asset = models.OneToOneField(Asset, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    assigned_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.asset.asset_name} assigned to {self.assigned_to.username}"
    
    class Meta:
        ordering = ['assigned_date']
        verbose_name = 'Asset Assignment'
        verbose_name_plural = 'Asset Assignments'   


