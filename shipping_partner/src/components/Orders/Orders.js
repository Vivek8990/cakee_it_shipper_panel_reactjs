import React  from "react";
import TableRow from "../Table_Row/TableRow"

function Orders(){
    return(
        <div  style={{padding:'20px',width: '100%',paddingLeft:'100px'}}>
                                <div class="card card-statistics">
                                    <div class="card-header">
                                        <div class="card-heading">
                                            <h4 class="card-title">Table Light Bordered</h4>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-bordered mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <TableRow/>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export default Orders;