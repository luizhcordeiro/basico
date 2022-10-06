# 3- leia um número real se for positivo imprima a raiz quadrada, se não imprima o número ao quadrado

number_real = float(input("Escreva um número real:"))

if number_real > 0:
    print(f'A raiz quadrada de {number_real} é {number_real ** 0.5}')
else:
    print(f'A raiz quadrada de {number_real} é {(number_real ** 2) * -1}')