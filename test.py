import sys

# Lấy đối số từ dòng lệnh
args = sys.argv

# Kiểm tra xem đã nhập đúng số lượng đối số hay chưa
if len(args) < 2:
    print("Vui lòng cung cấp đối số IP.")
    sys.exit(1)

# Gán giá trị của đối số IP cho biến "ip"
ip = args[1]

# Gán giá trị mặc định cho port, range và thread
port = 12
range_value = 13
thread = 14

# Kiểm tra các đối số thêm (port, range, thread)
if len(args) >= 3:
    # Kiểm tra nếu không nhập port và muốn nhập range
    if args[2] != ".":
        port = args[2]

if len(args) >= 4:
    # Kiểm tra nếu không nhập range và muốn nhập thread
    if args[3] != ".":
        range_value = args[3]

if len(args) >= 5:
    # Kiểm tra nếu không nhập thread
    if args[4] != ".":
        thread = args[4]

# In ra các giá trị
print("IP:", ip)
print("Port:", port)
print("Range:", range_value)
print("Thread:", thread)
