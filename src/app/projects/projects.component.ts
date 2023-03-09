import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/models';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'IT Service tracker & manager ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'This project is developed to manage IT service tracker',
        'Project Role: Requirement analysis, design, development & deployment.'
      ]
    },
    {
      title: 'Payroll module ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'The main features of this project are, uploading payment sheet and calculating the salary deductions, provident fund, tax etc. ',
        'Preserving the all data employee wise and maintaining their ledger. Notifications to email with pay slip',
        'Project Role: Requirement analysis, design, development & deployment.'
      ]
    },
    {
      title: 'HRIS system ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'This is a Human resource and Information management system',
        'Project Role: Requirement analysis, design, development & deployment.'
      ]
    },
    {
      title: 'REST API For Mobile APP EASY LIFE  ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'Easylife is a digital platform to purchase insurance of Guardian Life Insurance LTD',
        'Project Role: PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, REST API, windows server.'
      ]
    },
    {
      title: 'Bulk Mailer ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'Bulk mailer is the web applications for sending difference mail campaigns, notifications, notices etc. ',
        'Project Role: Requirement analysis, design, development & deployment.'
      ]
    },
    {
      title: 'Alkatifa Home Service provider website & APIs for App ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'This is a home service provider projects. Customer can avail home services like AC repairing, car washing, plumbing etc service through the mobile app & website',
        'Project Role: Requirement analysis, planning, design, development & deployment, API documentation & testing.'
      ]
    },
    {
      title: 'Online Claim submission ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'This projects has been developed for the customers to submit claim for the insurance services',
        'Project Role: Requirement analysis, planning, design, development & deployment.'
      ]
    },
    {
      title: 'EasyLife website ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'This is a website for onboarding customer digitally verifying NID and after ekyc.',
        'Internal reporting and customer support features included for business department and servicing department',
        'Project Role: Requirement analysis, planning, design, development & deployment.'
      ]
    },
    {
      title: 'Alternate digital channel & microsites with product engine ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'This project is developed for reselling the insurance products through alternate digital agencies & channels',
        'as well as with through third party app implementing microsites.',
        'Project Role: Requirement analysis, planning, design, development & deployment.'
      ]
    },
    {
      title: 'REST API For Mobile APP MyGuardian   ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, windows server.',
      description: [
        'My Guardian App is a digital platform to provide digital services to the customers as well as the producers & agents ',
        'Project Role: Requirement analysis, planning, design, development & deployment, API documentation & testing.'
      ]
    },
    {
      title: 'Core Insurance Management System ',
      technologies: 'PHP, Laravel, Bootstrap, jQuery, MS SQL, GitLab, Jira, windows server.',
      description: [
        'Developed Insurance Management system having major and core modules.',
        'Project Role: Requirement analysis, design, development & deployment.'
      ]
    },
  ]
  constructor() {

  }
  ngOnInit(): void {

  }
}
