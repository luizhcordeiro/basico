# 4- leia um número. Se for positivo calcule e mostre o número ao quadrado e a raiz quadrada dele

number_two = int(input("Escreva um número positivo:"))

if number_two > 0:
    print(f'A raiz quadrada de {number_two} é {number_two ** 0.5} e seu quadrado é {number_two ** 2}')
else:
    print("Esse não é um número válido")