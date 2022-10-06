# 5-faça Um programa que recebe um número inteiro e verifique se ele é par ou impar

number_int = int(input("Escreva um número inteiro:"))

if number_int % 2 == 0:
    print(f'{number_int} é par')
else:
    print(f'{number_int} é impar')