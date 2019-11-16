import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashflowtable',
  templateUrl: './cashflowtable.component.html',
  styleUrls: ['./cashflowtable.component.scss']
})
export class CashflowtableComponent implements OnInit {
  public cashflow = {
    openiningBalance: {
      name: 'openiningbalance',
      balance: [
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15'
      ]
    },
    CashIn: {
      name: 'Cash In',
      'AccountReceivable': {
        name: 'AccountReceivable',
        balance: [
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15'
        ],
        ChartofAccount: [
          {
            name: 'Chart of Account1',
            customer: [
                { 
                  CustomerName: 'c1',
                  ProjectionActaul: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionSystem: [
                    {
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionCustomer: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ]
                },
                {
                    CustomerName: 'c2',
                    ProjectionActaul: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionSystem: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionCustomer: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ]
                },
                {
                    CustomerName: 'c3',
                    ProjectionActaul: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionSystem: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionCustomer: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ]
                }
              ]
          },
          {
            name: 'Chart of Account2',
            customer: [
                {
                  CustomerName: 'c1',
                  ProjectionActaul: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionSystem: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionCustomer: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ]
                },
                {
                    CustomerName: 'c2',
                    ProjectionActaul: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionSystem: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionCustomer: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ]
                },
                {
                    CustomerName: 'c3',
                    ProjectionActaul: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionSystem: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionCustomer: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ]
                }
              ]
          },
          {
            name: 'Chart of Account3',
            customer: [
                {
                  CustomerName: 'abc',
                  ProjectionActaul: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionSystem: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionCustomer: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ]
                }
              ]
          }
        ]
      },
      Income: {
        name: 'Account-Receivable',
        balance: [
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15'
        ],
        ChartofAccount: [
          {
            name: 'Chart of Account1',
            customer: [
                {
                  CustomerName: 'abc',
                  ProjectionActaul: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionSystem: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionCustomer: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ]
                }
              ]
          },
          {
            name: 'Chart of Account2',
            customer: [
                {
                    CustomerName: 'c1',
                    ProjectionActaul: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionSystem: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionCustomer: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ]
                  },
                  {
                      CustomerName: 'c2',
                      ProjectionActaul: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionSystem: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionCustomer: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ]
                  },
                  {
                      CustomerName: 'c3',
                      ProjectionActaul: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionSystem: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionCustomer: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ]
                  }
              ]
          },
          {
            name: 'Chart of Account3',
            customer: [
                {
                  CustomerName: 'abc',
                  ProjectionActaul: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionSystem: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ],
                  ProjectionCustomer: [
                    {
                      day1: '$123121.15',
                      day2: '$123121.15',
                      day3: '$123121.15',
                      day4: '$123121.15',
                      day5: '$123121.15',
                      day6: '$123121.15',
                      day7: '$123121.15'
                    }
                  ]
                }
              ]
          }
        ]
      }
    },
    CashOut: {
      name: 'Cash Out',
      AccountPayable: {
        name: 'Account-Payable',
        balance: [
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15'
        ],
        ChartofAccount: [
          {
            name: 'Chart of Account1',
            customer: [
              {
                CustomerName: 'abc',
                ProjectionActaul: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionSystem: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionCustomer: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ]
              }
            ]
          },
          {
            name: 'Chart of Account2',
            customer: [
              {
                CustomerName: 'abc',
                ProjectionActaul: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionSystem: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionCustomer: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ]
              }
            ]
          },
          {
            name: 'Chart of Account3',
            customer: [
              {
                CustomerName: 'abc',
                ProjectionActaul: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionSystem: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionCustomer: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ]
              }
            ]
          }
        ]
      },
      Expense: {
        name: 'Expense',
        balance: [
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15',
          '$123121.15'
        ],
        ChartofAccount: [
          {
            name: 'Chart of Account1',
            customer: [
              {
                CustomerName: 'abc',
                ProjectionActaul: [
                  {
                    day1: '$12$123121.15.55',
                    day2: '$12$123121.15.55',
                    day3: '$12$123121.15.55',
                    day4: '$12$123121.15.55',
                    day5: '$12$123121.15.55',
                    day6: '$12$123121.15.55',
                    day7: '$12$123121.15.55'
                  }
                ],
                ProjectionSystem: [
                  {
                    day1: '$12$123121.15.55',
                    day2: '$12$123121.15.55',
                    day3: '$12$123121.15.55',
                    day4: '$12$123121.15.55',
                    day5: '$12$123121.15.55',
                    day6: '$12$123121.15.55',
                    day7: '$12$123121.15.55'
                  }
                ],
                ProjectionCustomer: [
                  {
                    day1: '$12$123121.15.55',
                    day2: '$12$123121.15.55',
                    day3: '$12$123121.15.55',
                    day4: '$12$123121.15.55',
                    day5: '$12$123121.15.55',
                    day6: '$12$123121.15.55',
                    day7: '$12$123121.15.55'
                  }
                ]
              }
            ]
          },
          {
            name: 'Chart of Account2',
            customer: [
                {
                    CustomerName: 'c1',
                    ProjectionActaul: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionSystem: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ],
                    ProjectionCustomer: [
                      {
                        day1: '$123121.15',
                        day2: '$123121.15',
                        day3: '$123121.15',
                        day4: '$123121.15',
                        day5: '$123121.15',
                        day6: '$123121.15',
                        day7: '$123121.15'
                      }
                    ]
                  },
                  {
                      CustomerName: 'c2',
                      ProjectionActaul: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionSystem: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionCustomer: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ]
                  },
                  {
                      CustomerName: 'c3',
                      ProjectionActaul: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionSystem: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ],
                      ProjectionCustomer: [
                        {
                          day1: '$123121.15',
                          day2: '$123121.15',
                          day3: '$123121.15',
                          day4: '$123121.15',
                          day5: '$123121.15',
                          day6: '$123121.15',
                          day7: '$123121.15'
                        }
                      ]
                  }
            ]
          },
          {
            name: 'Chart of Account3',
            customer: [
              {
                CustomerName: 'abc',
                ProjectionActaul: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionSystem: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ],
                ProjectionCustomer: [
                  {
                    day1: '$123121.15',
                    day2: '$123121.15',
                    day3: '$123121.15',
                    day4: '$123121.15',
                    day5: '$123121.15',
                    day6: '$123121.15',
                    day7: '$123121.15'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    closingBalance: {
      name: 'clsoingbalance',
      balance: [
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15',
        '$123121.15'
      ]
    }
  };
  public openingBalance;
  public closingBalance;
  public CashIn;
  constructor() { }

  ngOnInit() {
    this.openingBalance = this.cashflow.openiningBalance;
    this.closingBalance = this.cashflow.closingBalance;
    this.CashIn = this.cashflow.CashIn;
    console.log(this.CashIn.AccountReceivable)
    console.log(this.cashflow);
    console.log(this.cashflow.CashIn);
    console.log(this.cashflow.CashOut);
    console.log(this.cashflow.closingBalance);
    console.log(this.cashflow.openiningBalance);
  }


}
