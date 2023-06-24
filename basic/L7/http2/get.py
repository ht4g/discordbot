import requests
import shutil

urls = [
    "https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=5000&country=all&ssl=all&anonymity=all",
    "https://www.proxy-list.download/api/v1/get?type=http",
    "https://www.proxyscan.io/api/proxy?type=http&format=txt&limit=100",
    "https://www.proxyscan.io/api/proxy?type=http&format=txt&limit=100",
    "https://www.proxyscan.io/api/proxy?type=http&format=txt&limit=100",
    "https://www.proxyscan.io/api/proxy?type=http&format=txt&limit=100",
    "https://www.proxyscan.io/api/proxy?type=https&format=txt&limit=100",
    "https://proxy11.com/api/proxy.txt?key=NDAzNg.YYHPVA.QB8moHDjsHJ_R_q8lkgkUV3wt2c",
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all&simplified=true",
    "https://www.proxy-list.download/api/v1/get?type=http",
    "https://raw.githubusercontent.com/sunny9577/proxy-scraper/master/proxies.txt",
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http",
    "https://api.proxyscrape.com/v2/account/datacenter_shared/proxy-list?auth=8fo1gdqz21oaso6zdy&type=getproxies&country=all&protocol=http&format=normal&status=all",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/http.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/https.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
    "https://raw.githubusercontent.com/proxy4parsing/proxy-list/main/http.txt",
    "https://www.proxy-list.download/api/v1/get?type=http",
    "https://www.proxy-list.download/api/v1/get?type=https",
    "https://www.proxyscan.io/download?type=http"
]

 
print(f"Đang lấy Proxy từ {len(urls)} URL")

with open('newproxy.txt', 'w') as f:
    for url in urls:
        response = requests.get(url)
        f.write(response.text)
with open('newproxy.txt', 'r') as f:
    proxies = f.read().splitlines()
    num_proxies = len(proxies)
    print(f"Đã lấy được {num_proxies} Proxy từ {len(urls)} URL.")        