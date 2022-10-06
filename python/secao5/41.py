# 41- calculadora de IMC

peso = float(input("Digite seu peso: "))

altura = float(input("Digite sua altura: "))

imc = peso / (altura) ** 2

if imc <= 18.5:
    print(f'Seu IMC é {imc}, você esta abaixo do peso')
elif imc > 18.5 and imc <= 24.9:
    print(f'Seu IMC é {imc}, você é saudável')
elif imc > 25 and imc <= 29.9:
    print(f'Seu IMC é {imc}, você está com peso em excesso')
elif imc > 30 and imc <= 34.9:
    print(f'Seu IMC é {imc}, você está Obeso Grau I')
elif imc > 35 and imc <= 39.9:
    print(f'Seu IMC é {imc}, você está Obeso Grau II(Obesidade Severa)')
elif imc > 40:
    print(f'Seu IMC é {imc}, você está Obeso Grau III(Obesidade Morbida)')
else:
    print("Erro ao identificar sei IMC")