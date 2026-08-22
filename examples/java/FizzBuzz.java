public class FizzBuzz {
    static String labelFor(int number) {
        if (number % 15 == 0) {
            return "FizzBuzz";
        }
        if (number % 3 == 0) {
            return "Fizz";
        }
        if (number % 5 == 0) {
            return "Buzz";
        }
        return "number";
    }

    static void check(boolean condition, String message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }

    public static void main(String[] args) {
        check(labelFor(15).equals("FizzBuzz"), "15 should produce FizzBuzz");
        check(labelFor(3).equals("Fizz"), "3 should produce Fizz");
        check(labelFor(5).equals("Buzz"), "5 should produce Buzz");
        check(labelFor(7).equals("number"), "7 should produce number");
        System.out.println("fizzBuzz: ok");
    }
}
