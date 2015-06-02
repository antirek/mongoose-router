var Router = require('../index');
var request = require('supertest');
var express = require('express');

describe('Router', function () {
    var dbModel;
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
        dbModel = {
            find: function (query, callback) {
                callback(null, models);
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
});