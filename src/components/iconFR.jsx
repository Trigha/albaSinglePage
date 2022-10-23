import React from 'react';
import AWS from '../assets/aws.svg';
import Cloud from '../assets/cloud.svg';
import Angular from '../assets/angular.svg';
import Css3 from '../assets/css3.svg';
import Html5 from '../assets/html5.svg';
import Js from '../assets/js.svg';
import Php from '../assets/php.svg';
import Py from '../assets/python.svg';
import Atom from '../assets/atom.svg';
import Ruby from '../assets/ruby.svg';
import Mongo from '../assets/mongo.svg';
import Mysql from '../assets/mysql.svg';
import Postgres from '../assets/postgres.svg';
import Sql from '../assets/sql.svg';

function IconFr() {
  return (
    <div className="mt-10 ">
      <div className="grid grid-cols-6 md:mx-96">
        <img src={AWS} className="mb-14 hover:" />
        <img src={Cloud} className="mb-14" />
        <img src={Angular} className="mb-14" />
        <img src={Css3} className="mb-14" />
        <img src={Html5} className="mb-14" />
        <img src={Js} className="mb-14" />
        <img src={Php} className="mb-14" />
        <img src={Py} className="mb-14" />
        <img src={Atom} />
        <img src={Ruby} />
        <img src={Mongo} />
        <img src={Mysql} />
        <img src={Postgres} />
        <img src={Sql} />
      </div>
    </div>
  );
}

export default IconFr;
