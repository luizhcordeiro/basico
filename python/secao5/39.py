# 39 - aumento proporcional de acordo com a tabela

salario_atual = float(input("Salário atual: "))
tempo_servico = float(input("Tempo na empresa: "))

if salario_atual > 2000 and tempo_servico < 1:
    print("Seu salário não vai sofrer nenhuma alteração")
else:
    if salario_atual < 500:
        salario_atual += salario_atual * 0.25
    elif salario_atual > 500 and salario_atual <= 1000:
        salario_atual += salario_atual * 0.2
    elif salario_atual > 1000 and salario_atual <= 1500:
        salario_atual += salario_atual * 0.15
    elif salario_atual > 1500 and salario_atual <= 2000:
        salario_atual += salario_atual * 0.1
    else:
        print("erro em identificar o salario")

    if tempo_servico >= 1 and tempo_servico <= 3:
        salario_atual += 100
    elif tempo_servico >= 4 and tempo_servico <= 6:
        salario_atual += 200
    elif tempo_servico >= 7 and tempo_servico <= 10:
        salario_atual += 300
    elif tempo_servico > 10:
        salario_atual += 500
    else:
        print("erro ao identificar tempo de serviço")

    print(f'Seu novo Salário é {salario_atual}')
