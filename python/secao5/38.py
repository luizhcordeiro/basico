# 38 - pedir uma data de nascimento valida ao usuario

dia = int(input("Digite o dia da sua data de nascimento: "))
mes = int(input("Digite o Mẽs do seu nascimento: "))
ano = int(input("Digite o Ano do seu nascimento: "))
ano_atual = 2008
resposta_erro = "data invalida"
resposta_ok = "data valida"

if ano > ano_atual:
    print(f'{resposta_erro} - Ano invalido')
elif mes > 12 or mes < 0:
    print(f'{resposta_erro} - mês invalido')
elif dia > 31 or dia < 0:
    print(f'{resposta_erro} - dia invalido')
elif mes == 4 or mes == 6 or mes == 9 or mes == 11:
    if dia > 30:
        print(f'{resposta_erro} - dia invalido')
elif mes == 2:
    if dia > 29:
        print(f'{resposta_erro} - dia invalido')
    elif ano % 4 != 0:
        if dia > 28:
            print(f'{resposta_erro} - dia invalido')
else:
    print(resposta_ok)