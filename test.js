describe("pow", function () {

    describe("raises x to power 2", function () {

        function makeTest(x) {
            let expected = x * x;
            it(`${x} in the power 2 is ${expected}`, function () {
                assert.equal(pow(x, 2), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    describe("raises x to power 3", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

});