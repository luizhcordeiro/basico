#21
num1 = int(input("Escreva um número: "))
num2 = int(input("Escreva outro número: "))
soma = 0
multi = 1

for num in range(num1, num2 + 1):
    print(num)
    if num % 2 == 0:
        soma = soma + num
    else:
        multi = multi * num
print(f'soma = {soma} & Multiplicação = {multi}')

