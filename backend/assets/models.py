from django.db import models

class Asset(models.Model):
    asset_name = models.CharField(max_length=100, help_text="Enter name of the asset", verbose_name="Asset Name")
    description= models.TextField(help_text="Describe the asset", verbose_name="Asset Description"),
    serial_number = models.CharField(max_length=100, unique=True, help_text="Enter asset's serial number", verbose_name="Serial Number")
    purchase_date = models.DateTimeField(auto_now_add=True, help_text="Enter purchase date", verbose_name="Purchase Date")
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
    assigned_to = models.ForeignKey('auth.User',on_delete=models.CASCADE, verbose_name="Assigned To", help_text="The user to whom asset is assigned to")
    assigned_date = models.DateTimeField(auto_now_add=True, verbose_name="Assigned At", help_text="Date and time asset was assigned at")

    def __str__(self):
        return f"{self.asset.asset_name} assigned to {self.assigned_to.username}"
    
    class Meta:
        ordering = ['assigned_date']
        verbose_name = 'Asset Assignment'
        verbose_name_plural = 'Asset Assignments'   


