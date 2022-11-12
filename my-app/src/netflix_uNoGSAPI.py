import requests

url = "https://unogs-unogs-v1.p.rapidapi.com/search/deleted"

headers = {
	"X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
	"X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)

print(response.text)