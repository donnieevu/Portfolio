SELECT readmitted, Count(*) AS readmitted_count,
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
group by readmitted
LIMIT 10;


SELECT *
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
LIMIT 10;

SELECT column_name, 
       (SELECT COUNT(*) 
        FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
        WHERE column_name IS NULL) AS missing_count
FROM `semiotic-timer-453600-j7.healthcare_kpis.INFORMATION_SCHEMA.COLUMNS`
WHERE table_name = 'hospital_readmissions'
ORDER BY missing_count DESC;


SELECT 'readmitted' as column_name, CAST(readmitted AS STRING) AS VALUE
FROM (select distinct readmitted FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions)
UNION ALL
SELECT 'medical_specialty', medical_specialty 
FROM (select distinct medical_specialty FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions)
UNION ALL
SELECT 'glucose_test', glucose_test
FROM (select distinct glucose_test FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions)
UNION ALL
SELECT 'A1Ctest', A1Ctest 
FROM (select distinct A1Ctest FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions)


--percentage of readmitted patients
SELECT 
COUNT(*) AS total_patients, 
COUNTIF(readmitted = true) as total_readmissions,
ROUND(COUNTIF(readmitted = true) * 100.0/ COUNT(*),2) as readmission_rate_pct
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions

--percetange of diabetes patients
SELECT 
COUNT(*) AS total_patients,
COUNTIF(diabetes_med = true) as total_diabetes_patients,
ROUND(COUNTIF(diabetes_med = true) * 100 / COUNT(*),2) as diabetes_rate_pct
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions

--readmissions rate by age group
SELECT
age,
COUNT(*) AS total_patients,
COUNTIF(readmitted = true) as total_readmissions,
ROUND(COUNTIF(readmitted = true) * 100 / COUNT(*),2) as readmissions_rate
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
GROUP BY age
ORDER BY readmissions_rate desc;

--readmissions rate for patients who stayed > 5 days
SELECT
COUNT(*) as total_patients,
COUNTIF(readmitted = true AND time_in_hospital > 5) AS long_stay_readmissions,
ROUND(COUNTIF(readmitted = true AND time_in_hospital > 5) *100 / Count(*), 2) as long_stay_readmissions_rate
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions

--average length of stay in hospital
SELECT 
readmitted,
ROUND(AVG(time_in_hospital),2) as avg_time_in_hospital
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
GROUP BY readmitted

--TOP 10 most common diagnoses for readmitted patients
SELECT diag_1 as diagnosis,COUNT(*) as total_cases
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
WHERE
1=1
AND readmitted = true
GROUP BY diag_1
ORDER BY total_cases DESC
LIMIT 10;

--readmission rate for patients with diabetes
SELECT 
  diabetes_med, 
  COUNT(*) AS total_patients,
  COUNTIF(readmitted = true) AS total_readmissions,
  ROUND(COUNTIF(readmitted = true) * 100.0 / COUNT(*), 2) AS readmission_rate
FROM `semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions`
GROUP BY diabetes_med;

--avg # of procedures, medications, lab tests per patient
SELECT 
ROUND(AVG(n_procedures),2) as avg_procedures_per_patient,
ROUND(AVG(n_medications),2) as avg_medications_per_patient,
ROUND(AVG(n_lab_procedures),2) as avg_lab_procedures_per_patient
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions

--emergency visits & readmissions, showcasing if patients who visit ER frequently ...
--have higher readmission rates
SELECT
n_emergency,
COUNT(*) AS total_patients,
COUNTIF(readmitted = true) AS total_readmitted_patients,
ROUND(COUNTIF(readmitted = TRUE)*100/COUNT(*),2) as readmission_rate
FROM semiotic-timer-453600-j7.healthcare_kpis.hospital_readmissions
GROUP BY n_emergency
ORDER BY readmission_rate DESC