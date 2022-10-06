# 9
num = int(input("Quantos numeros impares você quer vizualizar: "))
num_two = 0
for num_two in range(num * 2):
    if num_two % 2 == 1:
        print(num_two)