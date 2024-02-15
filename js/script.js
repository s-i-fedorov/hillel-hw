(function () {
  const someText = 'Створіть функцію `analyzeText`, яка приймає рядок тексту як аргумент і використовує'
      + ' структуру даних Set для визначення кількості унікальних слів у тексті. Функція повинна повертати об\'єкт'
      + ' з двома властивостями: `uniqueWordsCount`, що вказує кількість унікальних слів, та `uniqueWords`, який є '
      + 'масивом цих слів. Переконайтеся, що ваша функція правильно обробляє регістр літер (вважає сліво "Привіт" '
      + 'та "привіт" одним і тим же словом) і ігнорує знаки пунктуації.';
  const someText2 = 'привіт?, хеллоу., Привіт';
  const wrongText = '2';

  function analyzeText(text) {
    const textString = text;
    if (!(typeof (textString) === 'string') || !(textString.trim().length > 1)) throw new Error('This argument does not valid');

    const textStringNew = textString.toLowerCase()
      .replace(/[.,?!`]/g, '');
    const textToArr = textStringNew.split(' ');
    const textSet = new Set(textToArr);
    const uniqueWords = [];
    textSet.forEach((i) => uniqueWords.push(i));
    const uniqueWordsCount = textSet.size;
    // console.log(`arr ${uniqueWords}`, `count ${uniqueWordsCount}`);

    return {
      uniqueWordsCount,
      uniqueWords,
    };
  }

  console.log(analyzeText(someText));
}());
