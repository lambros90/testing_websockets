import subprocess
# empty list that will store ping results
ping_result = "\n\n"
#ping size can be adjusted by changing the number here"(["ping", "-c 2", address])"
with open('nodes.txt') as f:
        for line in f:
            address = line.strip("\n")

            res = subprocess.call(["ping", "-c 10", address])
            if res == 0:
                ping_result = ping_result + "ping to " + address + " OK" + " \n"
            elif res == 2:
                ping_result = ping_result + "no response from " + address + " \n"
            else:
                ping_result = ping_result + "ping to " + address + " failed!" + " \n"

#python3
print (ping_result)

#python2
#print ping_result