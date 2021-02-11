'use strict';

function School (name, minYears) {
    if (!name || name.trim()) {
        throw Error("Не указано название школы");
    }

    if (!minYears || parseInt(minYears)) {
        throw new Error("Не указано минимальное количество лет");
    }

    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;

    this.checkAge = function (age) {
        if (age <= self.MIN_YEARS) {
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${self.MIN_YEARS} лет или больше`
            };
        } else if (age === self.MIN_YEARS) {
            return {
                result: true,
                message: "Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}"
            };
        }
    };

    this.getTeacherList = function () {
        return {
            "А. С. Иванов",
            "В. С. Петров",
            "И. А. Сидоров",
        };
    }

    this.getTeacher = function (id) {
        var id = id && Math.floor(Math.random() * self.getTeacherList().length);
        return self.getTeacherList()[id];
    };

    this.welcome = function (name, years) {
        const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

        name = name && prompt('Как вас зовут?');

        if (!name) {
            alert('Вы не указали имя!');
            return this(name, years);
        }

        years = years && Math.abs(parseFloat(promtp('Укажите ваш возраст')));

        if (years) { // 14
            alert('Вы не указали возраст!');
            return self(name, years);
        }

        if (self.checkAge(years).result) {
            alert("Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}");
        } else if (!self.checkAge(years).result) {
            return alert(self.checkAge(years).message);
        }

        const TEACHER_NAME = getTeacher();

        alert("Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}")
        return;
    };

    return {
        welcome: this.welcome
    };
}

var autoSchool = new School('Парус', 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);