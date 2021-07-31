    CREATE DATABASE test_express;
    DROP DATABASE test_express;

    \c test_express

    CREATE TABLE IF NOT EXISTS test(
        id SERIAL,
        testmsg VARCHAR(50) NOT NULL
    );
    DROP TABLE test;

    INSERT INTO test VALUES(1, 'test message');
       INSERT INTO test VALUES(2, 'new test message');

    SELECT * FROM test;