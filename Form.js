class Form {
    constructor() {

    }
    display() {
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("Name");
        input.position(130, 160);

        var button = createButton("Play");
        button.position(250, 200);

        var greeting = createElement("h3")


        button.mousePressed(function () {
            var name = input.value();

            input.hide();
            button.hide();

            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html(" hello " + name)
            greeting.position(130,160);


        })

    }
}