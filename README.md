# node-homework-01
'list' - https://monosnap.com/file/HEyMFgjkR3H24DRHkHqFyM6ganyCHm
'get' - https://monosnap.com/file/BLRdtcrDbcG7POpkXGrRHUZINpfLvh
'add' - https://monosnap.com/file/YRIDyG2UQrrSZMw44ZhOe9TIIeqaMq
'remove' - https://monosnap.com/file/fgTcUV70WmNvmbdef2fZrxWgw9QVIt


# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list

# Получаем контакт по id
node index.js --action get --id 5

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

# Удаляем контакт
node index.js --action remove --id=3