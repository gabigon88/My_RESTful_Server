import requests

url = "http://localhost:9527"

payload = {'Name':'Test man', 'ID':'1234567890'}

headers = {
    'Content-Type': 'application/json'
}

response = requests.request("POST", f'{url}/get', headers=headers, data = payload)
print(response.text)
response = requests.request("POST", f'{url}/post', headers=headers, data = payload)
print(response.text)
response = requests.request("POST", f'{url}/patch', headers=headers, data = payload)
print(response.text)
response = requests.request("POST", f'{url}/delete', headers=headers, data = payload)
print(response.text)