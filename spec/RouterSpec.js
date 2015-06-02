var Router = require('../index');
var request = require('supertest');
var express = require('express');

describe('Router', function () {
    
    var app = express();

    var models = [
        {
            _id: 1,
            name: '1234'
        },
        {
            _id: 2,
            name: '2345'
        }
    ];

    it('get list models', function (done) {
        var dbModel = {
            find: function () {
                return {
                    exec: function(callback) {
                        callback(null, models);
                    }
                };
            }
        }

        app.use('/tanks', Router(dbModel));

        request(app)
            .get('/tanks')
            .end(function (err, res){
                expect(res.body).toEqual(models);
                expect(res.status).toBe(200);
                done();
            });
    });

    it('get list model with id = 1', function (done) {
        var query = {_id: 1};
        var dbModel = {
            findOne: function (query, callback) {
                callback(null, models[0]);
            }
        }

        app.use('/maps', Router(dbModel));

        request(app)
            .get('/maps/1')
            .end(function (err, res) {                
                expect(res.body).toEqual(models[0]);
                expect(res.status).toBe(200);
                done();
            });
    });
});