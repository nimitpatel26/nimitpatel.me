// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify([
        {
          "name": "Johns Hopkins University",
          "description": [
              "M.S. in Computer Science",
              "3.5/4.0 GPA",
              "Spring 2022",
              "Coursework: Cloud Computing, Computer Architecture, Principles of Web Development"
          ]
        },
        {
          "name": "University of Maryland, Baltimore County",
          "description": [
            "B.S. in Computer Science",
            "3.69 /4.0 Major GPA",
            "December 2019",
            "Coursework: Natural Language Processing, Machine Learning, Algorithms, Data Structures, Computer Security, Computer Networks, Operating Systems, Computer Architecture, Database Management",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores at commodi consequatur ea\n" +
            "                        earum facere ipsa nam nemo numquam praesentium provident quaerat, qui. Ab aliquam culpa est id\n" +
            "                        perferendis repudiandae vero. Accusamus architecto earum eveniet, nesciunt quo ratione. Consequatur\n" +
            "                        cumque cupiditate, dolor dolores eligendi hic id illum, incidunt ipsam iusto laudantium non optio\n" +
            "                        provident quis quo quod, reiciendis repellendus repudiandae vel velit? A atque explicabo facere\n" +
            "                        incidunt labore, maiores officiis perspiciatis praesentium, quam repellendus reprehenderit rerum sequi\n" +
            "                        tempore veniam voluptatum. Adipisci aspernatur assumenda consectetur consequuntur corporis culpa cum\n" +
            "                        dolores dolorum eos error eum, explicabo in iure magnam minus modi officia omnis optio ratione sed\n" +
            "                        tempora, tenetur ullam. Ab asperiores, dignissimos est laboriosam perferendis tenetur totam. A ab\n" +
            "                        accusantium ad assumenda at autem commodi, debitis dolor error est et excepturi facere fugit hic ipsa\n" +
            "                        iure labore magnam maiores maxime nisi nulla omnis pariatur placeat praesentium quae quaerat quam qui\n" +
            "                        quos saepe sit sunt ullam voluptate voluptates. Enim impedit reprehenderit voluptatibus. Aperiam\n" +
            "                        architecto asperiores, autem delectus deserunt dolore, doloribus ducimus eaque eius eligendi esse\n" +
            "                        explicabo illo ipsa, iure labore molestias mollitia nobis praesentium quaerat quo recusandae\n" +
            "                        reiciendis repellat sed similique sint tenetur ut? Ad expedita laboriosam quas! Eaque eveniet sequi\n" +
            "                        voluptates!"
          ]
        }
      ]),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
