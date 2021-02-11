"use strict";

function School(name, minYears) {
  if (!name || !name.trim()) {
    throw Error("Не указано название школы");
  }

  if (!minYears || isNaN(parseInt(minYears))) {
    throw new Error("Не указано минимальное количество лет");
  }

  this.MIN_YEARS = minYears;
  this.SCHOOL_NAME = name;

  this.checkAge = function (age) {
    if (age < this.MIN_YEARS) {
      return {
        result: false,
        message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше`,
      };
    } else if (age >= this.MIN_YEARS) {
      return {
        result: true,
        message: `Добро пожаловать в автошколу \"${this.SCHOOL_NAME}\", ${name}`,
      };
    }
  };

  this.getTeacherList = function () {
    return ["А. С. Иванов", "В. С. Петров", "И. А. Сидоров"];
  };

  this.getTeacher = function (id) {
    id = id || Math.floor(Math.random() * this.getTeacherList().length);
    return this.getTeacherList()[id];
  };

  this.welcome = function (name, years) {
    const SCHOOL_ADDRESS = "Санкт-Петербург, ул. Пушкина, дом 23";

    while (!name) {
      alert("Вы не указали имя!");
      name = prompt("Как вас зовут?");
    }

    years = years && Math.abs(parseFloat(promtp("Укажите ваш возраст")));

    while (!years) {
      alert("Вы не указали возраст!");
      years = Math.abs(parseFloat(prompt("Укажите ваш возраст")));
    }

    if (this.checkAge(years).result) {
      alert(`Добро пожаловать в автошколу \"${this.SCHOOL_NAME}\", ${name}`);
    } else if (!this.checkAge(years).result) {
      return alert(this.checkAge(years).message);
    }

    const TEACHER_NAME = this.getTeacher();

    alert(
      `Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`
    );
    return;
  };
}

var autoSchool = new School("Парус", 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);
