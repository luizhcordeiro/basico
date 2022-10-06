# 1-receber dois números inteiros e mostrar o maior deles

a = int(input("Digite um número inteiro: "))
b = int(input("Digite outro número inteiro: "))

if a > b:
    print(f'O Maior é {a}')

elif a < b:
    print(f'O Maior é {b}')

else:
    print("Os números são iguais")