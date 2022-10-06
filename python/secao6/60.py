# 60
numbers = []
even_numbers = []
even_numbers_average = ""
num = 1

while num != 0:
    num = int(input("Digite um número inteiro diferente de zero: "))
    if num != 0:
        numbers.append(num)
        if num % 2 == 0:
            even_numbers.append(num)
            even_numbers_average = sum(even_numbers) / len(even_numbers)

    quant = len(numbers)
    sumNumbers = sum(numbers)
    average = sumNumbers / quant
    greater = max(numbers)
    lesser = min(numbers)

    print(
        f' Você tem {quant} números na lista, '
        f'a somo deles é {sumNumbers}, '
        f'a media deles é {average}, '
        f'o maior é {greater} '
        f'o menor é {lesser} '
        f'a media dos numeros pares é {even_numbers_average}'
    )
print(f'Você encerrou a execução com os numeros {numbers} na lista')