# 2-leia um número do usuario: Se for positivo imprimir a raiz quadrada se não diga que o número é invalido

number = int(input("Escreva um número positivo:"))

if number > 0:
    print(f'A raiz quadrada de {number} é {number ** 0.5}')
else:
    print("Esse não é um número válido")