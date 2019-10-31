import os
from multiprocessing import Pool
import json
import datetime
import time

hosts = ["54.153.13.140", "54.145.130.44"]
MAX_NUMBER_OF_STATUS_CHECKS = 2
FILE_NAME = 'hosts_stats.json'


#
# counter and sleep were added in order to simulate scheduler activity  
#

def ping(host):
    status = os.system('ping  -o -c 3 {}'.format(host))
    return datetime.datetime.now().strftime("%B %d %Y, %H:%M:%S"), {"monitor.ip": host,
                                                                "monitor.status": 'UP' if status == 0 else 'DOWN'}


if __name__ == "__main__":
    p = Pool(processes=len(hosts))
    counter = 0
    if not os.path.exists(FILE_NAME):
        with open(FILE_NAME, 'w') as f:
            f.write('{}')
    while counter < MAX_NUMBER_OF_STATUS_CHECKS:
        result = p.map(ping, hosts)
        with open(FILE_NAME, 'rb+') as f:
            f.seek(-1, os.SEEK_END)
            f.truncate()
            for entry in result:
                _entry = '"{}":{},\n'.format(entry[0], json.dumps(entry[1]))
                f.writelines(_entry)
                f.write('}')
        counter += 1
        time.sleep(2)