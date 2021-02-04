const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados

    proffyValue = {
        name:"Diego Fernandes", 
        avatar:"https://i2.wp.com/mundouber.com/wp-content/uploads/2020/06/1591072344_maxresdefault.jpg?fit=1280%2C720&ssl=1",
        whatsapp: "899895655",
        bio: 'Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir as coisas em laboratório e por mudar a vida das pessoas atravéz de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões',
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados , após cadastrarmos a class
        {
            weekday:1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday:0,
            time_from: 520,
            time_to: 1220
        },
    ]
      
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM PROFFYS")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
   //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha é das 8h até as 18h
    // o horário do time_from (8h) prescisa ser antes ou igual ao horário solicitado 
    // o time_to prescisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)

})