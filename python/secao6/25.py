# 25
soma = 0

for num in range(1_000):
    if num % 3 == 0 or num % 5 == 0:
        soma = soma + num
print(soma)