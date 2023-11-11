from abc import ABC, abstractmethod


class DutyAbstract(ABC):

    def __init__(self, salary, hours, bonus, vmp, summ_night, hours_night):
        self.value_hour = salary / hours  # стоимость часа основной ставки
        self.bonus = bonus / hours  # стоимость часа премии
        self.vmp = vmp / hours  # стоимость часа вмп
        self.intension = salary / hours  # стоимость часа интенсивности
        self.academic_degree = 3000 / hours  # стоимость часа доплаты за звание
        self.category = (salary * 0.22) / hours  # стоимость часа доплаты за категорию
        self.disutility = (salary * 0.08) / hours  # стоимость часа доплаты за вредность
        self.night = (summ_night / hours_night) * 8  # стоимость 8 ночных часов
        self.worth = 0

    @abstractmethod
    def get_worth(self, spend_duty):
        pass

    @abstractmethod
    def input_data(self):
        pass


class Duty(DutyAbstract):
    def get_worth(self, spend_duty):
        self.worth = self.value_hour + self.bonus + self.academic_degree + \
                     self.category + self.vmp + self.disutility
        var = (self.worth * spend_duty + self.night) - ((self.worth * spend_duty + self.night) * 0.13)
        return var

    def input_data(self):
        pass


# добавить ночные часы и вычет налога


def main():
    while True:
        try:
            answer = int(input('Стоимость какого дежурства хотите посчитать: 16 или 24 часа: '))
            user_salary = int(input('Введите оклад: '))
            user_hours = float(input('Введите количество рабочих часов: '))
            user_bonus = int(input('Введите премию: '))
            user_vmp = float(input('Введите общую сумму ВМП: '))
            user_summ_night = float(input('Введите общую сумму ночных: '))
            user_hours_night = int(input('Введите общее количество ночных часов: '))
            duty = Duty(
                salary=user_salary,
                hours=user_hours,
                bonus=user_bonus,
                vmp=user_vmp,
                summ_night=user_summ_night,
                hours_night=user_hours_night,
            )
            result = duty.get_worth(answer)
            print(f"\nСтоимость дежурства: {result} рублей")

            new_duty = 16
            if answer == 16:
                new_duty = 24

            answer_repeat = input(f"Посчитать дежурство {new_duty} (да, нет)? : ")
            if answer_repeat != "нет":
                new_result = duty.get_worth(new_duty)
                print(f"\nСтоимость дежурства: {new_result} рублей")
            break
        except ValueError:
            print('Программа ждет ввод числа, а не строки!')
            # 16 - 4387
            # 24 - 6191


if __name__ == '__main__':
    main()
