import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#search-name-form").submit(function(event) {
    event.preventDefault();
    $("#output").text("");

    let nameSearch = $("#search-name").val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.exports.apiKey}&name=${nameSearch}&location=or-portland`).then(function(response) {
      console.log(response);

      if(response.data.length === 0)
      {
        $("#output").text("No Doctors match that search. Please try again!");
      }

      for(let i = 0; i < response.data.length; i++)
      {
        $("#output").append(`<h4>${response.data[i].practices[0].name} </h4>
                            <h6> <strong>Specialty:</strong> ${response.data[i].specialties[0].name} </h6>
                            <h6> <strong>Phone:</strong> ${response.data[i].practices[0].phones[0].number} </h6>
                            <h6> ${response.data[i].practices[0].visit_address.street},
                                ${response.data[i].practices[0].visit_address.city},
                                ${response.data[i].practices[0].visit_address.state}
                                ${response.data[i].practices[0].visit_address.zip} </h6>
                            <h6> <strong>Accepting new Patients:</strong> ${response.data[i].practices[0].accepts_new_patients} </h6> <hr>`);
      }
    }).fail(function(error) {
      $("#showErrors").text("Error! " + `${error.responseText}`);
    });
    $("#search-name").val("");
  });


  $("#search-symptom-form").submit(function(event) {
    event.preventDefault();

    $("#output").text("");

    let symptomSearch = $("#search-symptom").val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptomSearch}&limit=25&location=or-portland&user_key=${process.env.exports.apiKey}`).then(function(response) {
      console.log(response);

      if(response.data.length === 0)
      {
        $("#output").text("No Symptoms match that search. Please try again!");
      }

      for(let i = 0; i < response.data.length; i++)
      {
        $("#output").append(`<h4>${response.data[i].practices[0].name} </h4>
                            <h6> <strong>Specialty:</strong> ${response.data[i].specialties[0].name} </h6>
                            <h6> <strong>Phone:</strong> ${response.data[i].practices[0].phones[0].number} </h6>
                            <h6> ${response.data[i].practices[0].visit_address.street},
                                ${response.data[i].practices[0].visit_address.city},
                                ${response.data[i].practices[0].visit_address.state}
                                ${response.data[i].practices[0].visit_address.zip} </h6>
                            <h6> <strong>Accepting new Patients:</strong> ${response.data[i].practices[0].accepts_new_patients} </h6> <hr>`)
      }
    }).fail(function(error) {
      $("#showErrors").text("Error! " + `${error.responseText}`);
    });

    $("#search-symptom").val("");
  });



});
