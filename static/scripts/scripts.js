function select_stu() {
    const stu_id = document.getElementById('students').value
    const sg1 = document.getElementById('science_grade_1').value
    const sg2 = document.getElementById('science_grade_2').value
    const sg3 = document.getElementById('science_grade_3').value
    const sg4 = document.getElementById('science_grade_4').value
    const mg1 = document.getElementById('math_grade_1').value
    const mg2 = document.getElementById('math_grade_2').value
    const mg3 = document.getElementById('math_grade_3').value
    const mg4 = document.getElementById('math_grade_4').value
    const data = { stu_id: stu_id, sg1: sg1, sg2: sg2, sg3: sg3, sg4: sg4, mg1: mg1, mg2: mg2, mg3: mg3, mg4: mg4 }

    fetch('/submit_grades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    alert('Grades successfully submitted!')
}

function student() {
    const stu_id = document.getElementById('students').value
    const data = { stu_id: stu_id }

    fetch('/get_grades', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

}