page.base('');

page('/', indexController.index);
page('/learn', learnController.index)
page('/about', aboutController.index);

page();
