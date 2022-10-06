# 40 - O custo do consumidor é o custo da fabrica + comiss]ao do distribuir + impostos.
# Ler o custo da fábrica e descobrir o custo do cosumidor

custo_de_fabrica = int(input("Digite o custo de Fabrica: "))

if custo_de_fabrica <= 12000:
    print(f'Custo do cosumidor = {custo_de_fabrica + custo_de_fabrica * 0.05}')

elif custo_de_fabrica > 12000 and custo_de_fabrica < 25000:
    print(f'custo do consumidor = {custo_de_fabrica + custo_de_fabrica * 0.1 + custo_de_fabrica * 0.15} - médio')

else:
    print(f'custo do consumidor = {custo_de_fabrica + custo_de_fabrica * 0.15 + custo_de_fabrica * 0.2} - alto')
