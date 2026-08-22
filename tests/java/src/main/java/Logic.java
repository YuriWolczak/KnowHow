public final class Logic {
    private Logic() {
        // Utility class.
    }

    public static int sumOfDigits(int number) {
        if (number < 0) {
            throw new IllegalArgumentException("number must be non-negative");
        }

        int sum = 0;
        do {
            sum += number % 10;
            number /= 10;
        } while (number > 0);

        return sum;
    }

    public static boolean isPrime(int number) {
        if (number < 2) {
            return false;
        }

        for (int divisor = 2; divisor <= number / divisor; divisor++) {
            if (number % divisor == 0) {
                return false;
            }
        }

        return true;
    }

    public static String fizzBuzzLabel(int number) {
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
}
