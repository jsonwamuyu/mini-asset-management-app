from django import forms

class AssetForm(forms.Form):
    asset_name = forms.CharField(max_length=100, required=True, label='Asset Name')
    serial_number = forms.CharField(max_length=100, required=True, label='Serial Number')
    purchase_date = forms.DateTimeField(required=False, label='Purchase Date', widget=forms.DateTimeInput(attrs={'type': 'datetime-local'}))    
    assigned_to = forms.CharField(max_length=100, required=False, label='Assigned To')
    